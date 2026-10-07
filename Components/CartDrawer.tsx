import {Button, Drawer} from "@heroui/react";

export function CartDrawer() {
  return (
    <Drawer >
      <Button className="text-white bg-transparent p-0">Cart</Button>
      <Drawer.Backdrop >
        <Drawer.Content placement="right">
          <Drawer.Dialog className="bg-[#16100b]">
            <Drawer.Header>
              <Drawer.Heading className="text-white">Cart</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                This is a bottom drawer built with React Aria's Modal component. It slides up from
                the bottom of the screen with a smooth CSS transition.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Confirm</Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}