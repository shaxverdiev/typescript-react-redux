import React, {useEffect} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creator/user';
import { useActions } from '../hooks/useActions';


const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector (state => state.user) // можем получить только user тк только он присутствует в  state reducer
  const {fetchUsers} = useActions()


  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
 
  return (
    <div>
        {users.map(user => 
            <div>{user.name}</div>
            )}
    </div>
  );
};

export default UserList;