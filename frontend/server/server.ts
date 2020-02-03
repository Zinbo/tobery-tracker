import { express } from 'express';


const app = express();

app.set('port', process.env.PORT || 3000);

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    console.log(
        '  App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
    );
    console.log('  Press CTRL-C to stop\n');
});

app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Handle angular routing, return all requests to angular app
app.get('*', function(req: any, res: any) {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

export default server;
