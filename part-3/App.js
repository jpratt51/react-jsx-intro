const App = () => (
    <div>
        <Person
            name="Joel"
            age={31}
            hobbies={[
                "reading",
                "video games",
                "going on dates with my wife",
                "watching shows",
            ]}
        />
        <Person
            name="Mary Helen"
            age={32}
            hobbies={[
                "TikTok",
                "Sister Wives",
                "Vanderpump Rules",
                "Merge Dragons!",
            ]}
        />
        <Person
            name="Fang"
            age={10}
            hobbies={["eating", "farting", "sleeping", "getting pets"]}
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
