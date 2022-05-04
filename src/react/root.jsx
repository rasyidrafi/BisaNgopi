function MyApp() {
    const [count, setCount] = React.useState(0);

    return <h1 onClick={() => setCount(prev => prev + 1)} >Click Me {count && `${count} times`}</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);