import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./Main";
// import { Provider } from "react-redux";
// import store from "./redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
    // </Provider>
  );
}

export default App;
