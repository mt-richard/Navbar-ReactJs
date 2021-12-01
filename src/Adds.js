const Adds = () => {
    return (
        <section className="adds">
            
            <div className="add">
                <img src={require('./images/Animal2.png').default} height={100} width={100} alt="" />
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem repudiandae, error debitis explicabo cum adipisci iste sequi, quam nemo facilis deserunt eos minima ad placeat! Ratione consequatur nisi voluptatum.</p>
                </div>
            </div>
            <div className="add">
                <img src={require('./images/animal1.jpg').default} height={100} width={100} alt="" />
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem repudiandae, error debitis explicabo cum adipisci iste sequi, quam nemo facilis deserunt eos minima ad placeat! Ratione consequatur nisi voluptatum.</p>
                </div>
            </div>
            <div className="add">
                <img src={require('./images/Animal2.png').default} height={100} width={100} alt="" />
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem repudiandae, error debitis explicabo cum adipisci iste sequi, quam nemo facilis deserunt eos minima ad placeat! Ratione consequatur nisi voluptatum.</p>
                </div>
            </div>
            <div className="addpro">
                <img src={require('./images/animal3.jpeg').default} height={100} width={100} alt="" />
                <div className="content">
                <h4>NavBar ++  <span className="slogan">We handle more ...</span></h4>
                </div>
            </div>
        </section>
    );
}
 
export default Adds;