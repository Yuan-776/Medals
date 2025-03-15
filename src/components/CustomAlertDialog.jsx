import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { ExclamationTriangleIcon, CheckCircledIcon, InfoCircledIcon } from "@radix-ui/react-icons";

const CustomAlertDialog = ({ title, message, isOpen, onClose }) => {
  const getIcon = () => {
    if (title && title.toLowerCase().includes("success")) {
      return <CheckCircledIcon color="green" width="20" height="20" />;
    } else if (title && (
        title.toLowerCase().includes("error") || 
        title.toLowerCase().includes("failed") || 
        title.toLowerCase().includes("unauthorized")
      )) {
      return <ExclamationTriangleIcon color="orange" width="20" height="20" />;
    } else {
      return <InfoCircledIcon color="blue" width="20" height="20" />;
    }
  };

  return (
    <AlertDialog.Root open={isOpen}>
      <AlertDialog.Content>
        <AlertDialog.Title>
          <Flex align="center" gap="2">
            {getIcon()}
            {title || "Alert"}
          </Flex>
        </AlertDialog.Title>
        <AlertDialog.Description>
          {message}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Action>
            <Button onClick={onClose}>
              OK
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default CustomAlertDialog;