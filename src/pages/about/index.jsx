import React from 'react'
import Layout from '../../components/Layout/Layout'

const index = ({ data }) => {
	return ( 
	<Layout>
		<div className="container">
                  <h2>About us</h2>
                  <p className="text-2xl">Hello!</p>
                  <p>We are Weeb/Linux Team, currently consists of 6 members. Not all of us are weebs but our lifestyle (computing as well) is heavily inspired by anime (yes, why not)?</p>
                  <p>We loves Linux - the most successful open source project in the world. We are also called as geeky boys, we works with scrolling-fast-as-f*ck terminals, code and do things that we love to do, watch anime, read manga and play games!</p>
                  <p className="text-2xl">Note</p>
                  <p>The sites is still under heavy construction, and we're working hard to get the team shaped. Thus you should contact the team owner for fastest respond.  We're looking forward to receive your warmly advices for our team.</p>
                  <p>Thanks.</p>
		</div>
	</Layout>
	)
}

export default index
