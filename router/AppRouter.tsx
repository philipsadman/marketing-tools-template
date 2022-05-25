const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={campaignInformation}>
                    <CampaignInformationPage />
                </Route>
                <Route path={editor}>
                    <EditorPage />
                </Route>
                <Route path={error}>
                    <ErrorPage />
                </Route>
                <Route path={myCampaigns}>
                    <MyCampaignsPage />
                </Route>
            </Switch>
        </Router>
    );
};
