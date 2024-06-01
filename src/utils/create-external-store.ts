/* eslint-disable no-param-reassign */

type Subscriber = () => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Case<S> = (state: S, action?: any) => S | void;

interface Actions<S> {
  [K: string]: Case<S>;
}

interface ActionsParams<S> {
  setState: (setState: ((previousState: S) => S) | S) => void;
}

interface CreateExternalStoreOptions<S, A extends Actions<S>> {
  initialState: S;
  actions: (params: ActionsParams<S>) => A;
}

type ValidActions<S, A extends Actions<S>> = {
  [K in keyof A]: (payload: Parameters<A[K]>[1]) => S | void;
};

export const createExternalStore = <S, A extends Actions<S>>({
  initialState,
  actions,
}: CreateExternalStoreOptions<S, A>) => {
  // eslint-disable-next-line prefer-const
  let state = initialState;

  const subscribers = new Set<Subscriber>();

  const emitChanges = () => {
    subscribers.forEach((subscriber) => {
      subscriber();
    });
  };

  const actionsParams: ActionsParams<typeof state> = {
    setState: (effect) => {
      // @ts-expect-error -- не работает type guard
      state = typeof effect === "function" ? effect(state) : effect;

      emitChanges();
    },
  };

  const validActions = Object.entries(actions(actionsParams)).reduce(
    (accumulate, [name, action]) => {
      // @ts-expect-error -- entries отдает строку
      accumulate[name] = (payload: unknown) => {
        const newState = action(state, payload);

        if (newState) {
          state = newState;
        }

        emitChanges();
      };

      return accumulate;
    },
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    {} as ValidActions<typeof state, ReturnType<typeof actions>>
  );

  return {
    getServerSnapshot() {
      return state;
    },
    getSnapshot() {
      return state;
    },
    subscribe(callback: Subscriber) {
      subscribers.add(callback);

      return () => {
        subscribers.delete(callback);
      };
    },
    actions: validActions,
  };
};
