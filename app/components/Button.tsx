'use client';

const Button = ({ open, setOpen }: { open: boolean; setOpen: () => void }) => {
    return (
        <button onClick={setOpen} className="rounded-lg bg-lavender flex items-center justify-center size-9 transition-transform duration-700 ease-in-out">
            <i className='text-white bx bx-menu-alt-left text-2xl'></i>
        </button>
    );
};

export default Button;
