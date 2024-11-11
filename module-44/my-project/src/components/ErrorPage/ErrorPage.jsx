import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div>
        <h2>ooooooooooooooooooooooopppppppppppppppppppppppppsssssssssssssssssssss</h2>
        <p>{error.statusText || error.message}</p>
        {
            error.status == 404 && <div>
                <h2>Not found</h2>
                <p>You input wrong</p>
                <Link to='/'><button>Home</button></Link>
            </div>
        }
    </div>
  )
}

export default ErrorPage
