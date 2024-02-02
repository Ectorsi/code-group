import ProviderMainContext from "./contexts/mainContext.tsx";
import AppRoutes from "./routes/routes"
import GlobalStyles from "./styles/globalStyles.ts";

function App() {

  return (
    <ProviderMainContext>
      <GlobalStyles />
      <AppRoutes />
    </ProviderMainContext>
  )
}

export default App
