import { DefaultLayout } from "./layouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Documents from "./pages/Documents/Documents.jsx";
import GetStart from "./pages/GetStart/GetStart";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import CreateDoc from "./pages/CreateDoc/CreateDoc.jsx";
import Trash from "./pages/Trash/Trash.jsx";
import DetailFile from "./pages/Documents/DetailFIle/DetailFile.jsx";
import DetailFileUpload from "./pages/DetailFileUpload/DetailFileUpload.jsx";
import TrashDetail from "./pages/Trash/TrashDetail/TrashDetail.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import SettingProfile from "./pages/SettingProfile/SettingProfile.jsx";
// toast
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <div className="App">
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<GetStart />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/documents/create" element={<CreateDoc />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documents/trash" element={<Trash />} />
            <Route path="/documents/files/:id" element={<DetailFile />} />
            <Route
              path="/documents/upload/:id"
              element={<DetailFileUpload />}
            />

            <Route path="/documents/trash/:id" element={<TrashDetail />} />
            <Route path="/setting" element={<SettingProfile />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </DefaultLayout>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
