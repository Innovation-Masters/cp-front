export default function Footer() {
    return (
        <footer className="page-footer p-4 bg-dark text-white">
            <section className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Endereço</h5>
                        <p>Av. Paulista, 1106</p>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="footer-copyright text-center py-3">© 2024 - Todos os direitos reservados
            </div>

        </footer>
    )
}