import Profile from "./Profile";

function Gallery(){
    
    const person = {
        name: "Riyansh",
        city: "Chandigarh",
        img: "https://i.imgur.com/MK3eW3As.jpg"
    };
    return(
        <section>
            <h1>Profile Gallery</h1>
            <Profile person={person} />
            <Profile person={person} />
            <Profile person={person} />
            <Profile person={person} />
            <Profile person={person} />
        </section>
    );
}

export default Gallery;