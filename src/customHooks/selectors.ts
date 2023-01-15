import { useZustStore } from "../zust/store";

export const useDispatch = () => {
  const dispatch = useZustStore((state) => state.dispatch);
  return dispatch;
};
