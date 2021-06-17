// convertir customer.json en parsedCustomer.json

function obtenerDatos() {
    const url = 'customer.json';

    fetch(url)
        .then(r =>  r.json())
        .then(datos => mostrarDatos(datos))
}

obtenerDatos()

function mostrarDatos(objeto) {
    
    const {id, object, metadata:{businessId}, name, sources: {object: objectSources, data}, subscriptions: {object: objectSubs, data: dataSubs}} = objeto

    const obj = {
        id,
        object,
        businessId,
        name,
        sources: {
            object: objectSources,
            data: data.map(({id, object, address_city, last4, name})=>{
                return {
                    id, 
                    object,
                    address_city,
                    last4,
                    name
                }
            }) 
        },
        subscriptions: {
            object: objectSubs,
            data: dataSubs.map(({id, object, items:{object:objectItem, data:dataItem}, quantity, start, start_date, status}) => {
                return {
                    id,
                    object,
                    items: {
                        object:objectItem,
                        data: dataItem.map(({id, object, plan:{id:idPlan, object:objectPlan, amount}, price:{id:idPrice, object:objectPrice, unit_amount}}) => {
                            return {
                                id,
                                object,
                                plan: {
                                    id:idPlan,
                                    object:objectPlan,
                                    amount
                                },
                                price: {
                                    id:idPrice,
                                    object:objectPrice,
                                    unit_amount
                                }
                            }
                        }),
                        quantity,
                        start,
                        start_date,
                        status
                    }
                }
            })
        }
    }
    

    console.log(obj);


    const result = JSON.stringify(obj)

    console.log(result);
}

