import React from 'react'
const Rate = () => {
  return (
    <div id="form-wrapper">
	<div id="diff">
		<h1 id="form-title">How Difficult was the class?</h1>
		<div id="debt-amount-slider">
			<input type="radio" name="debt-amount" id="1" value="1" required/>
			<label for="1" data-debt-amount="Very Easy"></label>
			
			<input type="radio" name="debt-amount" id="2" value="2" required/>
			<label for="2" data-debt-amount="Easy"></label>
			
			<input type="radio" name="debt-amount" id="3" value="3" required/>
			<label for="3" data-debt-amount="Average"></label>
			
			<input type="radio" name="debt-amount" id="4" value="4" required/>
			<label for="4" data-debt-amount="Hard"></label>
			
			<input type="radio" name="dept_amount" id="5" value="5" required/>
			<label for="5" data-debt-amount="Very Hard"></label>
			<div id="debt-amount-pos"></div>
		</div>
	</div>
</div>
  )
}

export default Rate