
export const Info = (props) => {

    const { activarInfo } = props;
    return (
        <span className={'mensaje${activarInfo ? "": "off"}'}>Llamando...</span>
    );
};