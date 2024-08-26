import "./main.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
// import Authors from "./pages/Authors";
// import OperationAuthor from "./pages/OperationAuthor";
// import Categories from "./pages/Categories";
// import AddCategoryForm from "./pages/AddCategoryForm";
// import CategoryView from "./pages/CategoryView";
// import OperationBook from "./pages/OperationBook";
import Books from "./pages/Book";
import MainLayout from "./layouts/MainLayout";
import Category from "./pages/category";
// import BookView from "./pages/BookView";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Author from "./pages/Author";
import Supplement from "./pages/Author/operation";
import BookSupplement from "./pages/Book/operation";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route path="books" element={<Books />} />
          <Route path="books/add" element={<BookSupplement />} />
          <Route path="authors" element={<Author />} />
          <Route path="authors/add" element={<Supplement />} />
          <Route path="categories" element={<Category />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
