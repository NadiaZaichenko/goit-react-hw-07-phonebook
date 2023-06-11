import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'reducer/operation';
import { ListItem, StyledButton } from './ContactItem.styled'

export const ContactItem = ({id, name, number}) => {
    const dispatch = useDispatch();

    const contactDeleteOf = (id) => {
        dispatch(deleteContact(id))

    }
return (
    <ListItem>
        <p>{name} : {number}</p>
        <StyledButton type="button" 
        onClick={() => dispatch(contactDeleteOf(id))}>
            Delete
        </StyledButton>
    </ListItem>
);
}

ContactItem.propTypes ={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,

}