


function AddUser(){


    return(
        <>
        <div className="container">
             <h1 classNameName="text-primary text-center">Add User</h1>
            <form>
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Position</label>
            <input type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </>
    )

}


export default AddUser;