// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at

//   http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.argv._

'use strict';

const FILE_NAME = 'yarn.lock';

function removeLockFields(folderPath, outputFolder) {
    const fs = require('fs');
    const readline = require('line-reader');
    const filePath = `${folderPath}/${FILE_NAME}`;
    const output = `${outputFolder}/${FILE_NAME}`;

    let content = "";
    readline.eachLine(filePath, function (line, last) {
        if (!line.startsWith('  resolved "http')) {
            content = content.concat(line).concat('\n');
        }
        if (last) {
            fs.writeFile(`${output}`, content, writeErr => {
                if (writeErr) {
                    console.log(`Error writing file ${output}`, writeErr);
                } else {
                    console.log(`${output} file saved`);
                }
            });
        }

    }, function (err) {
        console.warn(`${filePath} does not exist`);
    });
}

module.exports.removeLockFields = removeLockFields;