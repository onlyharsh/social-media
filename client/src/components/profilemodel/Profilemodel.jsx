
import { Modal, useMantineTheme } from '@mantine/core';
import './Profilemodel.css'
function Profilemodel({modalOpened, setModalOpened}) {
 
  const theme = useMantineTheme();

  return (
    
      <Modal
        
    
        overlayColor={theme.colorScheme==='dark'? theme.colors.dark[9] :theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size='45%'
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
      
      >
        <form className='infoForm'>
            <h3>Your info</h3>
            <div>
            <input type="text" className="infoInput" name='FirstName' placeholder='First Name' />
            <input type="text" className="infoInput" name='LastName' placeholder='Last Name' />
            </div>
            <div>
            <input type="text" className="infoInput" name='Studying in' placeholder='Studying in' />
            </div>
            <div>
            <input type="text" className="infoInput" name='lives in' placeholder='Lives in' />
            <input type="text" className="infoInput" name='country' placeholder='Country' />
            </div>
            <div>
            <input type="text" className="infoInput" name='status' placeholder='Relationship status' />
            
            </div>
            <div className='type2'>
                Profile Image
                <input type="file" name='profileImg' className='type1'/>
                Cover Image
                <input type="file" name='coverImg' className='type1'/>
            </div>
            <button className='button sign-button'>Update</button>
        </form>
        
      </Modal>

     
  );
}

export default Profilemodel