import AutoCompletePage from "../pages/AutoCompletePage";
import ButtonPage from "../pages/ButtonPage";
import InputPage from "../pages/InputPage";
import SelectPage from "../pages/SelectPage";

export const routes = [
  {
    path: '/button',
    element: <ButtonPage />
  },
  {
    path: '/input',
    element: <InputPage />
  },
  {
    path: '/select',
    element: <SelectPage />
  },
  {
    path: '/autocomplete',
    element: <AutoCompletePage />
  }
]
