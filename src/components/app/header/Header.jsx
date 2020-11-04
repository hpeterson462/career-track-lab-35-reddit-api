import React from 'react';
import { setSubredditInput } from '../../../actions/subredditActions';
import { getSubredditCurrent, getSubredditInput } from '../../../selectors/selectors';

const Header = () => {
  const input = useSelector(getSubredditInput);
  const dispatch = useDispatch();
  const current = useSelector(getSubredditCurrent);

  const handleChange = ({ target }) => {
    dispatch(setSubredditInput(target.value))
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(setSubredditInput());
  }

  return (
    <>
      <header>
        <form>
          <label htmlFor="subreddit">Subreddit</label>
          <input type="text" id="text" value={input} onChange={handleChange} />
          <button data-testid="subreddit-button">Submit</button>
        </form>
        <h2>Searching for {current}</h2>
      </header>
    </>
  )
}

export default Header;
