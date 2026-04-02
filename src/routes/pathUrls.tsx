import AutoCompletePage from "../pages/AutoCompletePage";
import ButtonPage from "../pages/ButtonPage";
import InputPage from "../pages/InputPage";
import SelectPage from "../pages/SelectPage";
import LoadingPage from "../pages/LoadingPage";
import StepPage from "../pages/StepPage";
import TabsPage from "../pages/TabsPage";
import TablePage from "../pages/TablePage";
import DatePickerPage from "../pages/DatePickerPage";
import TimePickerPage from "../pages/TimePickerPage";

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
  },
  {
    path: '/loading',
    element: <LoadingPage />
  },
  {
    path: '/step',
    element: <StepPage />
  },
  {
    path: '/tabs',
    element: <TabsPage />
  },
  {
    path: '/table',
    element: <TablePage />
  },
  {
    path: '/datepicker',
    element: <DatePickerPage />
  },
  {
    path: '/timepicker',
    element: <TimePickerPage />
  }
]
