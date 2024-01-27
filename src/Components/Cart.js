



function Cart(props){


        return(


         <>
        <div class="card container" style={{width: "50rem"}}>
                <img class="card-img-top" src={props.image}/>
                    <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <h5 class="card-title">{props.email}</h5>
                    </div>
                </div>
        </>

        )
}


export default Cart;