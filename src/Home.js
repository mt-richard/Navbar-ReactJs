const Home = () => {
    return (
        <section className="Home">
            <div className="content">
            <h3>NavBar ++ Story</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate neque voluptatibus inventore quaerat, dignissimos aliquam aspernatur rem. Labore delectus voluptates eius porro rem minus eveniet ducimus odit. Consequatur corporis sint sequi dolorum ipsa aspernatur velit neque sed odit magni aut, sunt dolor doloribus voluptates in, odio molestiae quam exercitationem!</p>
            <button>Read More ...</button>
            </div>
            <div className="photo">
                <img src={require('./images/Penguin.png').default} alt="" width={300} height={300} />
            </div>
            
        </section>
    );
}
 
export default Home;