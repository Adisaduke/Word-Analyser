import Content from './component/Content';
import Header from './component/Header'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
