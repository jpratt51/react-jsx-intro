const App = () => (
    <div>
        <Tweet
            username="japratt"
            name="Joel"
            date="01 / 01 / 2023"
            message="What's up guys?!"
        />
        <Tweet
            username="mhconnors"
            name="Mary Helen"
            date="01 / 02 / 2023"
            message="Hey babe!"
        />
        <Tweet
            username="fljconnors"
            name="Fang"
            date="01 / 03 / 2023"
            message="Food food food food food?"
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
