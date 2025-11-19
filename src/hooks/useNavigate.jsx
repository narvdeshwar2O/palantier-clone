import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  const goForward = () => {};
  const goBackward = () => {};
  return { goTo };
};
