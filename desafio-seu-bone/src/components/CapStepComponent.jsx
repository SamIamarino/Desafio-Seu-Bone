export default function CapStepComponent({imgSource,description}) {
    return(
        <div className="flex gap-8">
            <img src={imgSource} alt="icon" className="block size-28" />
            <p className="w-100 relative top-5 font-semibold">{description}</p>
        </div>
    );
}