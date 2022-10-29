import { NextPageContext } from "next";
import Head from "next/head";

interface ErrorComponentProps {
	statusCode?: number;
}

function ErrorComponent({ statusCode }: ErrorComponentProps): JSX.Element {
	return (
        <div>
            <Head>
                <title>Error</title>
            </Head>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : "An error occurred on client"}
            </p>
        </div>
        
	);
}

ErrorComponent.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorComponent;