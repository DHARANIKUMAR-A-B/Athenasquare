import './App.css';
import gif1 from './1.gif';
import gif2 from './2.gif';
import gif3 from './3.gif';
function App() {
  return (
    <div className="App">
      <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" />
                    </div>
                    <li><a href="#Product">Product</a></li>
                    <li><a href="#Our_story">Our story</a></li>
                    <li><a href="#Resource">Resource</a></li>
                </ul>
                <div class="rightNav">
                <button class="button"><a class="link" href="https://www.kula.ai/book-demo?"><p class="text-link">Book a demo</p></a></button>
                </div>
            </nav>
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Double the hires,half the effort
                        </h1>
                        <p class="text-small">
                        Open conversations and nurture relationships at scale and be the first choice 
                        when your ideal candidate is ready to explore.
                        </p>
                        <br></br>
                        <button class="button"><a class="link" href="https://www.kula.ai/kula-outreach"><p class="text-link">View kula outreach</p></a></button>
                    </div>
                </div>
            </section>


          <div class="container">
              <div class="con_left">
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                            <h1 class="text-big" id="program">
                                Automated Candidate Follow-ups
                            </h1>
                            <p class="text-small">
                            For prospective candidates, send automated, periodic follow-ups
                            and value-adds to nurture long-term relationships
                            </p>
                        </div>
                    </div>
                </section>
                </div>
                <div class="con_right">
                    <section class="section">
                    <img class='image' src={gif1} style={{margin:'auto'}}/>
                    </section>
                </div>
            </div>

            <div class="container">
              <div class="con_left">
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                            <h1 class="text-big" id="program">
                            Personalized Candidate Reach Outs
                            </h1>
                            <p class="text-small">
                            No more spray and pray. Ensure 1:1 communication to all of your connections 
                            through dynamic personalization capabilities
                            </p>
                        </div>
                    </div>
                </section>
                </div>
                <div class="con_right">
                    <section class="section">
                    <img class='image' src={gif2} style={{margin:'auto'}}/>
                    </section>
                </div>
            </div>

            <div class="container">
              <div class="con_left">
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                            <h1 class="text-big" id="program">
                            Reach out on channels candidate prefer
                            </h1>
                            <p class="text-small">
                            Devise multichannel engagement flows with email, LinkedIn requests, and InMails.
                            </p>
                        </div>
                    </div>
                </section>
                </div>
                <div class="con_right">
                    <section class="section">
                    <img class='image' src={gif3} style={{margin:'auto'}}/>
                    </section>
                </div>
            </div>

            <footer className="footer">
                <p className="text-footer">
                    
                </p>
            </footer>
    </div>
  );
}

export default App;
