import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="">
        <form action="">
          <input type="text" name="title" placeholder="Title"/><br/>
          <input type="text" name="teamName" placeholder="Team Name"/><br/>
          <input type="text" name="description" placeholder="Description"/><br/>
          <input type="date" name="date"/><br/>
          <input type="url" name="url" placeholder="Repo URL"/><br/>
          Team Member:<br/>
          <select multiple name="teamMembers">
             <option value="andrew">Andrew</option>
             <option value="jaive">Jaive</option>
             <option value="sam">Sam</option>
             <option value="tealiie">Tealiie</option>
             <option value="tim">Tim</option>
             <option value="tina">Tina</option>
          </select>
          <br/>
          Photos:
          <br/>
          <input type="file" name="photos"/><br/>
          <input type="text" name="caption" placeholder="Photo caption"/><br/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
})
