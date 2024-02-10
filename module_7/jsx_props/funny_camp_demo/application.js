const Title = (props) => {
    const titleStyle = {
        fontSize: "48px",
        color: "rgb(112, 182, 115)"
    }

    const welcomeMsg = () => {
        alert('Welcome to Funny Camp')
    }

    return <h1 onClick={welcomeMsg} style={titleStyle}>{props.title}</h1>
}

const Description = (props) => {
    return <p>{props.title} is the ultimate online destination for booking your next unforgettable camping experience!</p>
}

const CampsiteList = (props) => {
    const campsiteListStyle = {
        display: "flex",
        justifyContent: "flex-start"
    }

    const campsitesList = props.campsites.map(campsite => {
        return (
            <CampsiteListItem campsite={campsite} key={campsite.id} />
        )
    })
    return (
        <div style={campsiteListStyle}>
            {campsitesList}
        </div>
    )
}

const CampsiteListItem = (props) => {
    const campsite = props.campsite

    const campsiteStyle = {
        border: "1px solid black",
        padding: "20px",
        marginLeft: "20px"
    }

    return (
        <div key={campsite.id} style={campsiteStyle}>
            <h4>{campsite.site}</h4>
            <small>${campsite.price}/night</small>
        </div>
    )
}

const App = () => {
    const campsites = [
        { id: 1, site: "Jasper Whistler", price: 39 },
        { id: 2, site: "Banff Lake Louise", price: 41 },
        { id: 3, site: "Riding Mountain Wasagaming", price: 35 }
    ]

    const appTitle = "Funny Camp React Demo"

    return (
        <>
            <Title title={appTitle} />
            <Description title={appTitle} />
            <CampsiteList campsites={campsites} />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)