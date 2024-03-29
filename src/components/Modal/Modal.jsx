import sprite from '../../assets/sprite.svg';

const Modal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains('modal-wrapper')) onClose();
  };

  return (
    <>
      {isOpen === true && (
        <div className=" fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.75)]  overflow-hidden overflow-y-auto z-[999]">
          <div
            onClick={onWrapperClick}
            className="modal-wrapper absolute top-0 left-0 justify-center flex items-center w-[100%] min-h-[100%]"
          >
            <div className="relative w-[100%] max-w-[541px] bg-[#fff] rounded-[24px] min-h-[752px] p-[40px]">
              <button
                className="absolute top-[16px] right-[16px] group focus:outline-none"
                onClick={() => onClose()}
              >
                <svg className="w-[24px] h-[24px] stroke-[#121417] group-hover:stroke-[#0b44cd] group-focus:stroke-[#0b44cd] focus:outline-none  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]">
                  <use href={`${sprite}#icon-close`} />
                </svg>
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
