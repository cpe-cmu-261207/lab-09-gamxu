import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="d-flex justify-content-center">
        <img 
        src="/image/profilepic.png" 
        className="mt-5 rounded-circle"
        width='200px'
        height='200px'
        />
      </div>

      <div style={{fontWeight:"bolder"}} class="mt-3 justify-content-center d-flex fs-4"> 
        Wuttipat Sanchai
      </div>

      <div className="d-flex flex-column justify-content-center fs-6 mt-2">
        <span style={{textAlign:'center'}}>My name is Wuttipat Sanchai (Did). I am from Lampang. I am a 19 years
          old Computer Engineering student at Chiangmai University.
        </span>
        <span style={{textAlign:'center'}}>I love working with computers!</span>
        <br/>
      

        <div>  
          <span 
          style={{fontWeight:"bolder", alignItems: 'center'}} 
          className="d-flex justify-content-center fs-6 mb-3"
          >
            Computer Languages Capability
          </span>

          <div className="d-flex justify-content-center gap-5">
            <div>
              <img src="/image/python.jpg" width="200px" style={{border:"solid"}} className="rounded-3"></img>
              <p className="d-flex justify-content-center mt-3">1 year experience</p>
            </div>
            <div>
              <img src="/image/cpp.jpg" width="200px" style={{border:"solid"}} className="rounded-3"></img>  
              <p className="d-flex justify-content-center mt-3">1 year experience</p>
            </div>
          </div>

          <span 
          style={{fontWeight:"bolder", alignItems: 'center'}} 
          className="d-flex justify-content-center fs-6 mb-3 mt-3"
          >
            Hobbies
          </span>

          <div className="d-flex justify-content-center gap-5">
            <div style={{maxWidth:"200px"}}>
              <img src="/image/forexphoto.jfif" width="200px" style={{border:"solid"}} className="rounded-3"></img>
              <p style={{textAlign:'center'}} className="mt-3 mx-auto">I have been started my Forex trader career for 6 months</p>
            </div>
            <div style={{maxWidth:"200px"}}>
              <img src="/image/book.jfif" width="200px" style={{border:"solid"}} className="rounded-3"></img>  
              <p style={{textAlign:'center'}} className="mt-3 mx-auto">I always love to read economics news</p>
            </div>
          </div>


        </div>

      </div>



    </MainLayout>
  );
}
