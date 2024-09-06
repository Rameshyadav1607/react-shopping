export function NetfilxRegisterComponent(){
    return(
       
        <div className="container-fluid text-center mt-3 bg-dark p-3 text-white w-50">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div>
            <input type="email"></input>

            <button className="btn btn-danger">
                Get startd
                <span className="bi bi-chevron-right"></span>
            </button>
        </div>
        </div>
    )
}