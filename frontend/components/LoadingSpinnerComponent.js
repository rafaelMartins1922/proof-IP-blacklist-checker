import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadingSpinnerComponent(){
    return (
        <>
        <div className="spinner-border text-info" role="status">
            <span className="sr-only"></span>
        </div>
        </>
    )
}