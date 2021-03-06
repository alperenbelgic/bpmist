﻿using bpmist.common.DataModels;
using bpmist.common.DataModels.SubDocumentTypes;
using Google.Cloud.Firestore;
using System;

namespace bpmist.common.DataModels.DocumentTypes
{

    [FirestoreData]
    public class Process : Document
    {
        [FirestoreProperty] public string ProcessName { get; set; }

        [FirestoreProperty] public ProcessModel[] VersionedProcessModels { get; set; } = new ProcessModel[0];
        [FirestoreProperty] public ProcessVisuals ProcessVisuals { get; set; }

    }
}
