//imports
import Animal from './Animal'
import Human from './Human'

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
    </div>
  );
}

export default App;
