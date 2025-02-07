import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { InputNumber } from "primereact/inputnumber";

interface ContactFormModalProps {
  visible: boolean;
  onHide: () => void;
}

const ContactFormModal = ({ visible, onHide }: ContactFormModalProps) => {
  const headerDialog = (
    <div className="text-center">
      <h2 className="mb-3">Contáctanos</h2>
      <h4 className="my-0 font-light">Solicitar más información</h4>
    </div>
  );
  return (
    <div className="contact-modal">
      <Dialog
        header={headerDialog}
        visible={visible}
        className="responsive-dialog"
        modal
        onHide={onHide}
      >
        <form onSubmit={() => {}}>
          <div className="flex justify-content-between grid">
            <div className="p-field col-12 lg:col-6 xl:col-4">
              <span className="my-5">
                <InputText
                  id="name"
                  name="name"
                  value={""}
                  onChange={() => {}}
                  // onBlur={}
                  className={`w-full `}
                />
                <label htmlFor="name">Nombre</label>
              </span>
            </div>
            <div className="p-field col-12 lg:col-6 xl:col-4">
              <span className="my-5">
                <InputNumber
                  id="fhone"
                  name="fhone"
                  value={0}
                  onChange={() => {}}
                  // onBlur={}
                  useGrouping={false}
                  className={`w-full `}
                />
                <label htmlFor="name">Numero Telefonico</label>
              </span>
            </div>
            <div className="p-field col-12 lg:col-6 xl:col-4">
              <span className="my-5">
                <InputText
                  id="email"
                  name="email"
                  value={""}
                  onChange={() => {}}
                  // onBlur={}
                  className={`w-full `}
                />{" "}
                <label htmlFor="name">Correo Electrónico</label>
              </span>
            </div>
          </div>
          <div className="p-field">
            <span className="mb-5">
              <InputTextarea
                id="message"
                name="message"
                value={""}
                onChange={() => {}}
                // onBlur={}
                rows={5}
                className={`w-full `}
              />
              <label htmlFor="name">Mensaje</label>
            </span>
          </div>

          <div className="flex justify-content-end mt-2">
            <Button type="submit" label="Enviar" />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default ContactFormModal;
