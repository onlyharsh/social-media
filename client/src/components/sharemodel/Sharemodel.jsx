
import { Modal, useMantineTheme } from '@mantine/core';
import Postshare from '../postshare/Postshare';

function Sharemodel({modalOpened, setModalOpened}) {
 
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
       <Postshare/>
        
      </Modal>

     
  );
}

export default Sharemodel