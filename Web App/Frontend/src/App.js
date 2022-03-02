import ImagesList from "./components/imagesList/ImagesList";
import { Container } from '@mui/material';


function App() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
      <ImagesList/>
    </Container>
  );
}

export default App;
