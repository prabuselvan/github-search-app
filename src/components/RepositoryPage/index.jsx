import React from 'react';

class RepositoryPage extends React.Component {

    componentDidMount(repoName) {
        console.log('repo Name is ',repoName);
        // fetch(`https://api.github.com/repos/prabuselvan/${repoName}`)
    }

    render () {
        return (
            <div>
                <h1> RepositoryPage</h1>
            </div>
        )
    }
}

export default RepositoryPage;