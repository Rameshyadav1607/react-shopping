export function NetfilxRegisterComponent(){
    return(
       
        <div >
        <p className="text-size">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-group">
            <input type="email"></input>

            <button className="btn btn-danger">
                Get startd
                <span className="bi bi-chevron-right"></span>
            </button>
        </div>
        </div>
    )
}