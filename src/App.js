//imports
import Animal from './Animal'
import Human from './Human'
import Car from './Car'

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <Animal pizza="dog"/>
      <Animal pizza="cat"/>
      <Animal pizza="tiger"/>
      <Animal pizza="eagle"/>
      <Animal pizza="lion"/>
      <Human name="nikki" location="Seattle"/>
      <Car />
    </div>
  );
}

export default App;
