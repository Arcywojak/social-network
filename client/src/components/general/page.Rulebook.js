import React from 'react'
import '../../styles/rulebook.css'
import {toggleAuth} from '../../functions/functions';

const Rulebook = () => {
    return (
        <main className="container">
        <div className="inner-container">
            <h1>Blah blah blah, blah blah blah</h1>
            <ol>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non bibendum lorem, a laoreet justo. Curabitur eleifend posuere gravida. Vivamus quis leo id nisi dictum accumsan id at risus. Praesent mollis velit vel ultricies vulputate. Suspendisse condimentum, sapien elementum sollicitudin consectetur, massa justo facilisis neque, quis feugiat felis elit sed erat. Aenean interdum lacus nec mattis dapibus. Morbi quis condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non bibendum lorem, a laoreet justo. Curabitur eleifend posuere gravida. Vivamus quis leo id nisi dictum accumsan id at risus. Praesent mollis velit vel ultricies vulputate. Suspendisse condimentum, sapien elementum sollicitudin consectetur, massa justo facilisis neque, quis feugiat felis elit sed erat. Aenean interdum lacus nec mattis dapibus. Morbi quis condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non bibendum lorem, a laoreet justo. Curabitur eleifend posuere gravida. Vivamus quis leo id nisi dictum accumsan id at risus. Praesent mollis velit vel ultricies vulputate. Suspendisse condimentum, sapien elementum sollicitudin consectetur, massa justo facilisis neque, quis feugiat felis elit sed erat. Aenean interdum lacus nec mattis dapibus. Morbi quis condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non bibendum lorem, a laoreet justo. Curabitur eleifend posuere gravida. Vivamus quis leo id nisi dictum accumsan id at risus. Praesent mollis velit vel ultricies vulputate. Suspendisse condimentum, sapien elementum sollicitudin consectetur, massa justo facilisis neque, quis feugiat felis elit sed erat. Aenean interdum lacus nec mattis dapibus. Morbi quis condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non bibendum lorem, a laoreet justo. Curabitur eleifend posuere gravida. Vivamus quis leo id nisi dictum accumsan id at risus. Praesent mollis velit vel ultricies vulputate. Suspendisse condimentum, sapien elementum sollicitudin consectetur, massa justo facilisis neque, quis feugiat felis elit sed erat. Aenean interdum lacus nec mattis dapibus. Morbi quis condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non bibendum lorem, a laoreet justo. Curabitur eleifend posuere gravida. Vivamus quis leo id nisi dictum accumsan id at risus. Praesent mollis velit vel ultricies vulputate. Suspendisse condimentum, sapien elementum sollicitudin consectetur, massa justo facilisis neque, quis feugiat felis elit sed erat. Aenean interdum lacus nec mattis dapibus. Morbi quis condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </li>
                
            </ol>
        </div>
        <div className="overlay none"  onClick={() => {toggleAuth(null, true)}}></div>  
         
        </main>
    )
}

export default Rulebook
