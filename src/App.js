
import './App.css';
import { SimpleGrid,Box } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <SimpleGrid columns={[1,2,3,4,5,6]} spacing={10}>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
    </div>
  );
}

export default App;
